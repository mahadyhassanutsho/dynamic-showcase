import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatarImg from "@/assets/avatar.jpg";

const About = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Prisma", "PostgreSQL", "MongoDB", "Firebase",
    "TailwindCSS", "Framer Motion", "Git", "REST APIs"
  ];

  return (
    <section className="min-h-[calc(100vh-4rem)] py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Get to know the developer behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Avatar className="h-64 w-64 avatar-glow">
              <AvatarImage src={avatarImg} alt="Ayan" />
              <AvatarFallback className="text-4xl">AY</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-foreground">
              Hi, I'm <span className="text-primary">Ayan</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate fullstack web developer with expertise in building 
              modern, scalable web applications. I love turning ideas into reality 
              through clean, efficient code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development started with curiosity and has evolved 
              into a deep passion for creating exceptional digital experiences. I 
              specialize in the React ecosystem and enjoy working with databases 
              and backend technologies.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="tech-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
