import { client } from '@/services/api/api';
import { gql } from '@apollo/client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GlobalDataState } from './globalDataSlice.types';

const initialState: GlobalDataState = {
    data: {
        header: null,
        footer: null,
    },
    loading: false,
    error: null,
    initialized: false,
};

const GET_GLOBAL_DATA = gql`
    query GetGlobalData {
        Header {
            nav {
                navigation {
                    link {
                        type
                        reference {
                            relationTo
                            value {
                                ... on Page {
                                    id
                                    title
                                    slug
                                }
                            }
                        }
                        label
                    }
                    subnav {
                        link {
                            type
                            reference {
                                relationTo
                                value {
                                    ... on Page {
                                        id
                                        title
                                        slug
                                    }
                                }
                            }
                            label
                        }
                    }
                }
            }
        }
        Footer {
            title
            copy
            copyright
            nav {
                navigation {
                    link {
                        type
                        reference {
                            relationTo
                            value {
                                ... on Page {
                                    id
                                    title
                                    slug
                                }
                            }
                        }
                        label
                    }
                }
            }
            socials {
                social {
                    link {
                        type
                        reference {
                            relationTo
                            value {
                                ... on Page {
                                    id
                                    title
                                    slug
                                }
                            }
                        }
                        label
                    }
                    icon
                }
            }
        }
    }
`;

export const fetchGlobalData = createAsyncThunk(
    'globalData/fetchGlobalData',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await client.query({
                query: GET_GLOBAL_DATA,
            });
            return {
                header: data.Header,
                footer: data.Footer,
            };
        } catch (error) {
            console.error('fetchGlobalData - błąd:', error);
            return rejectWithValue(
                error instanceof Error
                    ? error.message
                    : 'Błąd podczas pobierania danych globalnych',
            );
        }
    },
);

const globalDataSlice = createSlice({
    name: 'globalData',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchGlobalData.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGlobalData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = { ...state.data, ...action.payload };
                state.initialized = true;
            })
            .addCase(fetchGlobalData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default globalDataSlice.reducer;
