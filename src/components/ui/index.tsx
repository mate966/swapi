import IconEmpire from './Icons/IconEmpire';
import IconFacebook from './Icons/IconFacebook';
import IconGithub from './Icons/IconGithub';
import IconLinkedIn from './Icons/IconLinkedIn';

export default function Icon({ icon }: { icon: string }) {
    switch (icon) {
        case 'github':
            return <IconGithub />;
        case 'linkedin':
            return <IconLinkedIn />;
        case 'facebook':
            return <IconFacebook />;
        case 'empire':
            return <IconEmpire />;
        default:
            return null;
    }
}
