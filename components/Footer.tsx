import Link from 'next/link';
import {
  MailIcon,
  ChatIcon,
  FacebookIcon,
  LinkedInIcon,
} from './icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary/90 backdrop-blur-xl border-t border-white/10 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background Gradient - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary/10 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold mb-6 hover:opacity-80 transition-opacity">
              <Image src="/logo-white.svg" alt="Growth Leder Logo" width={40} height={40} />
              Growth Leder
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              We help businesses grow, scale, and operate efficiently through expert lead generation, virtual assistance, and automation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/growthleder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:-translate-y-1 transition-all border border-white/10"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/growthleder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077B5] hover:text-white hover:-translate-y-1 transition-all border border-white/10"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-300 hover:text-white hover:pl-2 transition-all">Lead Generation</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white hover:pl-2 transition-all">Virtual Assistance</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white hover:pl-2 transition-all">Outreach Services</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white hover:pl-2 transition-all">Accounting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 text-secondary mt-1" />
                <a href="mailto:admin@growthleder.com" className="text-slate-300 hover:text-white transition-colors">
                  admin@growthleder.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ChatIcon className="w-5 h-5 text-secondary mt-1" />
                <a
                  href="https://wa.me/923047775545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  WhatsApp: +92 3047775545
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Growth Leder. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
