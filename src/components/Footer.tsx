import { Bird } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-canopy text-sand/70 py-12">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sand font-heading text-lg">
            <Bird className="w-6 h-6" />
            <span>Wingtail Sanctuary</span>
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Wingtail Sanctuary. All rights reserved. Proudly protecting Australian birdlife.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-sand transition-colors">Privacy</a>
            <a href="#" className="hover:text-sand transition-colors">Terms</a>
            <a href="#" className="hover:text-sand transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
