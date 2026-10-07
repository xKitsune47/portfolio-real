import React from "react";
import Section from "../Section";

const About: React.FC = () => {
  return (
    <Section id="about" title="About me" className="py-16 lg:py-24">
      <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed">
        <p>
          I'm a frontend developer. Most of what I make is React and
          TypeScript: web apps in Next.js and mobile apps in React Native.
        </p>
        <p>
          My bachelor's thesis was an IoT device: an ESP32-C3 that measures
          carbon monoxide, temperature and humidity and shows them on a screen.
          I like projects where the code ends up running on a device.
        </p>
        <p>
          I also go to hackathons. At HackYeah 2025 my team took third place in
          the ZUS task, and at HackYeah 2026 I built an offline Bluetooth mesh
          chat for Android.
        </p>
      </div>
    </Section>
  );
};

export default About;
