// import Image from 'next/image';

// const teamMembers = [
//   {
//     name: "Akash Mishra",
//     role: "CEO",
//     hint: "professional headshot man",
//     image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "Aaditya Shukla",
//     role: "CTO",
//     hint: "professional headshot woman",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   }
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <section className="max-w-screen-xl mx-auto px-4 py-16">
//         <div className="grid gap-12 md:grid-cols-2 md:gap-16">
//           <div className="space-y-6">
//             <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//               About Aveda Technologies
//             </h1>
//             <p className="text-lg text-muted-foreground md:text-xl">
//               Aveda Technologies was founded with a simple mission: to empower businesses with transformative technology solutions. We are a passionate team of developers, designers, and strategists dedicated to helping our clients innovate, build, and grow.
//             </p>
//             <p className="text-lg text-muted-foreground md:text-xl">
//               Our approach is collaborative and client-centric. We believe in building strong partnerships to understand your unique challenges and deliver solutions that drive real results. From initial concept to final deployment, we are with you every step of the way.
//             </p>
//           </div>
//           <div className="flex items-center justify-center">
//             <Image
//               src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Aveda Technologies Team"
//               width={600}
//               height={400}
//               className="w-full h-auto rounded-lg object-cover shadow-lg"
//               data-ai-hint="team meeting"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-primary py-16 text-primary-foreground">
//         <div className="max-w-screen-xl mx-auto px-4">
//           <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
//             <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//               Meet Our Team
//             </h2>
//             <p className="max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
//               We’re a passionate team of developers, designers, and growth experts building the future of AI-powered technology.
//             </p>
//           </div>
//           <div className="grid gap-16 sm:grid-cols-2 md:max-w-lg mx-auto">
//             {teamMembers.map((member) => (
//               <div key={member.name} className="text-center flex flex-col items-center">
//                 <Image
//                   src={member.image}
//                   alt={`Photo of ${member.name}`}
//                   width={150}
//                   height={150}
//                   className="w-[150px] h-[150px] rounded-full object-cover mb-4 shadow-md"
//                   data-ai-hint={member.hint}
//                 />
//                 <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
//                 <p className="text-primary-foreground/90 font-medium">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import Image from 'next/image';

const teamMembers = [
  {
    name: "Akash Mishra",
    role: "CEO",
    image: "/images/akash.jpg",
  },
  {
    name: "Aaditya Shukla",
    role: "CTO",
    image: "/images/aaditya.jpg",
  },
  {
    name: "Mirtunjay Yadav",
    role: "CEO",
    image: "/images/ankit.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              About Aveda Technologies
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Aveda Technologies was founded with a simple mission: to empower businesses with transformative technology solutions. We are a passionate team of developers, designers, and strategists dedicated to helping our clients innovate, build, and grow.
            </p>
            <p className="text-lg text-muted-foreground md:text-xl">
              Our approach is collaborative and client-centric. We believe in building strong partnerships to understand your unique challenges and deliver solutions that drive real results. From initial concept to final deployment, we are with you every step of the way.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/team.jpg"
              alt="Aveda Technologies Team"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
              We’re a passionate team of developers, designers, and growth experts building the future of AI-powered technology.
            </p>
          </div>
          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 md:max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center flex flex-col items-center">
                <Image
                  src={member.image}
                  alt={Photo of ${member.name}}
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                <p className="text-primary-foreground/90 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}