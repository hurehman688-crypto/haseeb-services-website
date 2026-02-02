
import ContactContent from '@/components/ContactContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Growth Leder - Lead Generation • Virtual Assistance',
  description: 'Book a free strategy call with Growth Leder. Get in touch for lead generation services, virtual assistance, and automation solutions.',
};

export default function Contact() {
  return <ContactContent />;
}
