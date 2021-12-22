export class User {
  id: string;
  full_name: string;
  short_name?: string;
  created_at?: string;
  updated_at?: string;

  email: string;
  email_verification_sent_at?: string;
  email_verified_at?: string;

  phone: string;
  phone_verification_sent_at?: string;
  phone_verified_at?: string;

  img_url: string;
}
