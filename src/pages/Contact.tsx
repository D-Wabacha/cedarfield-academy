import { Link } from 'react-router-dom'
import { school } from '../config/school'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { Section, SectionHeading } from '../components/Section'
import { ContactForm } from '../components/ContactForm'
import { ContactMethods, LocationCard, OfficeHours } from '../components/ContactDetails'
import { DemoNotice } from '../components/DemoNotice'

export default function Contact() {
  return (
    <>
      <Seo title="Contact & location" description={`Contact ${school.name}: phone, WhatsApp, email, office hours and directions.`} />
      <PageHero eyebrow="Contact us" title="We’re here to help" intro="Call, send a WhatsApp message or write to us. The school office replies to all messages within two working days." />

      <Section labelledBy="contact-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
            <div>
              <h2 id="contact-title" className="mb-6 text-3xl font-medium">Reach us directly</h2>
              <ContactMethods />
              <DemoNotice className="mt-4">Phone, WhatsApp and email details are placeholders for this demonstration.</DemoNotice>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-medium">Office hours</h2>
              <OfficeHours />
            </div>
          </div>
          <div className="rounded-3xl border border-sand bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
            <h2 className="text-2xl font-medium">Send a message</h2>
            <p className="mt-2 mb-8 text-muted">For admissions, the <Link to="/admissions#enquire" className="font-semibold text-forest-800 underline underline-offset-2">admissions enquiry form</Link> helps us reply faster.</p>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section tone="sand" labelledBy="location-title">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="location-title" eyebrow="Location" title="Finding us" intro={`${school.location.line1}, ${school.location.line2}. Visitor parking is available at the main gate; please sign in at reception on arrival.`} />
          </div>
          <div className="lg:col-span-7"><LocationCard /></div>
        </div>
      </Section>
    </>
  )
}
