import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('research','helpdesk-operations-exception-aging-patterns-research');
export default function Page(){return renderAug19Article('research','helpdesk-operations-exception-aging-patterns-research')}
