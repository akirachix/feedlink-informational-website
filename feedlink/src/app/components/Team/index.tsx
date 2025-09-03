


'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface TeamMember {
  name: string;
  image: string;
  github: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Hewan Mehari',
    image: '/images/hewan.png',
    github: 'https://github.com/hewanmehari',
    linkedin: 'http://www.linkedin.com/in/hewan-mehari-7bbb41356',
  },
  {
    name: 'Kisanet Shshay',
    image: '/images/kisu.jpg',
    github: 'https://github.com/kisanetshshay',
    linkedin: 'http://www.linkedin.com/in/kisanet-shshay-43a95835a',
  },
  {
    name: 'Pauline Mwihaki',
    image: '/images/Pauline.jpg',
    github: 'https://github.com/paulinemwihakimuiruri',
    linkedin: 'https://www.linkedin.com/in/pauline-mwihaki-0b4212358/',
  },
  {
    name: 'Emeline Niyogisubizo',
    image: '/images/ruby.png',
    github: 'https://github.com/emelineniyogisubizo',
    linkedin: 'http://www.linkedin.com/in/emelyne-niyogisubizo-11ab67258',
  },
  {
    name: 'Semhal Estifanos',
    image: '/images/semhall.jpg',
    github: 'https://github.com/semhalestifanos',
    linkedin: 'https://www.linkedin.com/in/semhal-estifanos-3b74a2300/',
  },
];

function TeamSection() {
  const firstRow = teamMembers.slice(0, 3);
  const lastRow = teamMembers.slice(3);

  return (
    <section>
      <div className="md:max-w-4xl xl:max-w-7xl mx-auto text-center ">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mt-10 mb-12">
          Meet the Team Behind
          <span className="text-[var(--secondary-color)]"> FeedLink</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {firstRow.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--primary-color)] shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 md:w-45 md:h-45 xl:w-63  xl:h-63 ">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="290vw, 63vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg w-40 text-center">
                <h3 className="font-bold text-[var(--primary-color)] text-sm mt-3 tracking-wide">
                  {member.name}
                </h3>
                <div className="flex justify-center space-x-3 mt-3">
                  <a
                    href={member.github}
                    aria-label="GitHub"
                    className="text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={member.linkedin}
                    aria-label="LinkedIn"
                    className="text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center md:gap-35 gap-10  sm:gap-40 mt-10 items-center">
          {lastRow.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--primary-color)] shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110   md:w-45 md:h-45 xl:w-63  xl:h-63">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="290vw, 63vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg w-40 text-center">
                <h3 className="font-bold text-[var(--primary-color)] text-sm mt-3 tracking-wide">
                  {member.name}
                </h3>
                <div className="flex justify-center space-x-3 mt-3">
                  <a
                    href={member.github}
                    aria-label="GitHub"
                    className="text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={member.linkedin}
                    aria-label="LinkedIn"
                    className="text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;