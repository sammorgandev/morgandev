import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at events around the world and been interviewed for a few podcasts."
      intro="I love talking about my experiences and learnings. I've spoken at events around the world and been interviewed for a few podcasts mostly around my experiences with Bubble."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="#"
            title="Best practices for building large applications on Bubble"
            description="My good friend and coworker, Andrew, and I gave a talk at BubbleCon in NYC in 2024."
            event="BubbleCon 2024"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="Building AI-powered applications with Bubble"
            description="I had the pleasure of speaking at Nocodeklub in Berlin in 2024 - a great group of people who are passionate about no-code and AI."
            event="Nocodeklub Berlin"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="Building modular: how Bubble builds Bubble for scale"
            description="I gave a talk with my co-workers at BubbleCon 2023 about building modular on Bubble! It was an awesome session, and streamed live to thousands of attendees."
            event="BubbleCon 2023"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="How to build a gen-ai recipe app without code"
            description="I had the privalege of giving a 30 minute session at Bubble's 2024 how to build day! Learn how to build a generative AI recipe app with me using Bubble and open AI."
            event="How to build day 2024"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="How to build a to-do application"
            description="I spoke at Cornell Tech on Roosevelt Island in NYC - we learned about Bubble and how to build a to do application"
            event="Cornell Tech"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="This Week in No-Code"
            description="I had an awesome time chatting with JJ Englert, David Pal, and my friend and coworker Andrew Vernon on the This Week in NoCode Podcast. We chatted about our journeys into nocode, and what we think the future looks like."
            event="JJ Englert, David Pal, and Andrew Vernon"
            cta="Listen to podcast"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=abkeLCTyNKQ"
            title="Create With"
            description="Had the pleasure of chatting with Kieran from Create With about BubbleCon2024 and how it all went! Andrew joined us for a chat in the Bubble offices right after the event."
            event="Kieran Ball, Andrew Vernon"
            cta="Listen to podcast"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
