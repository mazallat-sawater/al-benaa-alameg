import { client, contactLinks } from "@/config/client";

export default function FloatingContacts() {
return ( <div className="floating-contacts">
<a
href={contactLinks.phone}
className="float phone"
aria-label={`اتصل بـ ${client.shortName}`}
>
☎ </a>
  <a
    href={contactLinks.whatsapp}
    className="float whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`تواصل مع ${client.shortName} عبر واتساب`}
  >
    🟢
  </a>
</div>

);
}
