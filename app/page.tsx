import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Lokesh Darne
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-6 text-muted-foreground">
            Software Development Engineer in Test
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
            Passionate about creating robust test automation frameworks and ensuring software quality through innovative testing solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be dynamically populated */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Test Automation Framework</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive test automation framework using Selenium WebDriver and TestNG.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 rounded-full text-sm">Selenium</span>
                <span className="px-2 py-1 bg-primary/10 rounded-full text-sm">TestNG</span>
                <span className="px-2 py-1 bg-primary/10 rounded-full text-sm">Java</span>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://github.com/lokeshdarne" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog posts will be dynamically populated */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Best Practices for API Testing
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn about the essential practices for creating maintainable and efficient API tests.
              </p>
              <Button variant="link" className="p-0">Read More →</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:lokeshdarne@gmail.com" className="hover:text-primary">
                    lokeshdarne@gmail.com
                  </a>
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/lokeshdarne" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/lokeshdarne/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Message" className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}