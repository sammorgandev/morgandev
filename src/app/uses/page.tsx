import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M3 Pro, 18GB RAM (2023)">
            Always been an apple fan - I&apos;ve had tons of workstations over
            the years. This one is my favorite so far.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="Apple Wireless Keyboard">
            I&apos;m a fan of all things apple and this keyboard is no
            exception. I use it for all my work and it&apos;s a great way to
            stay productive on the go.
          </Tool>
          <Tool title="Apple Magic Mouse">
            Aside from the asinine charging mechanism, this is a great mouse.
          </Tool>
          <Tool title="Shaquille O'Neal Chair">
            Its worth calling out that Shaq makes a great chair for big guys!
            The support is great and it&apos;s a comfortable chair for long days
            of work.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor IDE">
            I find cursor to be a better version of VSCode - I don&apos;t use it
            for agentic work, but as my daily driver for writing code.
          </Tool>
          <Tool title="Replit">
            I&apos;ve been loving replit for agentic work. Its been a great tool
            for quickly spinning up dashboards and fun webapps like
            samples.studio.
          </Tool>
          <Tool title="DataGrip">
            This jetbrains IDE is a great tool for working with databases. I use
            it for all my database work, including my new side hustles and
            anything related to my day job.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Ever since I started working with Bubble, I&apos;ve been using Figma
            to design my apps. It&apos;s a great tool for collaborating with
            others and getting feedback on my designs.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Jira">
            I use Jira in my day job to track my work and collaborate with my
            team. It&apos;s a great tool for keeping track of tasks and
            projects.
          </Tool>
          <Tool title="Linear">
            I prefer linear for personal projects. It&apos;s a great tool for
            keeping track of tasks and projects and bit simpler than Jira for
            smaller things.
          </Tool>
          <Tool title="ChatGPT">
            Shameless daily user. I use it for everything from writing code to
            generating ideas for my side hustles.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
