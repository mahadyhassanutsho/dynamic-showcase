import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import avatarImg from "@/assets/avatar.jpg";

const ThemePreview = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-orbs" />
      
      <div className="relative z-10 container mx-auto px-6 py-12 space-y-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-gradient">Theme Preview</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cyber-modern design system with glassmorphism, glow effects, and vibrant gradients
          </p>
        </motion.header>

        {/* Avatar Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Avatar with Glow</h2>
          <div className="flex items-center gap-8">
            <Avatar className="h-16 w-16 avatar-glow">
              <AvatarImage src={avatarImg} alt="Developer" />
              <AvatarFallback>AY</AvatarFallback>
            </Avatar>
            <Avatar className="h-24 w-24 avatar-glow animate-pulse-glow">
              <AvatarImage src={avatarImg} alt="Developer" />
              <AvatarFallback>AY</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16 avatar-glow">
              <AvatarImage src={avatarImg} alt="Developer" />
              <AvatarFallback>AY</AvatarFallback>
            </Avatar>
          </div>
        </motion.section>

        {/* Typography */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Typography & Gradients</h2>
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-gradient">Primary Gradient Text</h3>
            <h3 className="text-4xl font-bold text-gradient-secondary">Secondary Gradient Text</h3>
            <p className="text-foreground text-lg">Regular foreground text for body content</p>
            <p className="text-muted-foreground">Muted foreground for secondary information</p>
            <a href="#" className="link-underline text-primary inline-block">Animated Link Underline</a>
          </div>
        </motion.section>

        {/* Buttons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="glow-primary">Primary Glow</Button>
            <Button variant="secondary" className="glow-secondary">Secondary Glow</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </motion.section>

        {/* Tech Badges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Tech Badges</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "Node.js", "MongoDB"].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </motion.section>

        {/* Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Glass Card */}
            <Card className="glass card-hover">
              <CardHeader>
                <CardTitle className="text-primary">Glass Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Glassmorphism effect with backdrop blur and subtle border.</p>
              </CardContent>
            </Card>

            {/* Gradient Border Card */}
            <div className="border-gradient p-[1px] card-hover">
              <Card className="bg-card border-0">
                <CardHeader>
                  <CardTitle className="text-gradient">Gradient Border</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Animated gradient border that intensifies on hover.</p>
                </CardContent>
              </Card>
            </div>

            {/* Glow Card */}
            <Card className="bg-card hover-glow">
              <CardHeader>
                <CardTitle className="text-secondary">Hover Glow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Scale and glow effect on hover for interactive elements.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Floating Animation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6 text-center"
        >
          <h2 className="text-2xl font-semibold text-foreground">Floating Animation</h2>
          <div className="flex justify-center gap-8">
            <div className="w-20 h-20 rounded-xl bg-primary/20 border border-primary/50 animate-float flex items-center justify-center">
              <span className="text-primary text-2xl">✦</span>
            </div>
            <div className="w-20 h-20 rounded-xl bg-secondary/20 border border-secondary/50 animate-float flex items-center justify-center" style={{ animationDelay: "0.5s" }}>
              <span className="text-secondary text-2xl">◆</span>
            </div>
            <div className="w-20 h-20 rounded-xl bg-accent/20 border border-accent/50 animate-float flex items-center justify-center" style={{ animationDelay: "1s" }}>
              <span className="text-accent text-2xl">★</span>
            </div>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-primary glow-primary" />
              <p className="text-sm text-muted-foreground text-center">Primary (Cyan)</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-secondary glow-secondary" />
              <p className="text-sm text-muted-foreground text-center">Secondary (Purple)</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-accent" />
              <p className="text-sm text-muted-foreground text-center">Accent (Magenta)</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-muted border border-border" />
              <p className="text-sm text-muted-foreground text-center">Muted</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-card border border-border" />
              <p className="text-sm text-muted-foreground text-center">Card</p>
            </div>
          </div>
        </motion.section>

        {/* Badges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center py-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            Ready to build? Let's proceed with <span className="text-primary">Phase 2: Navigation & Routing</span>
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default ThemePreview;
