"use client";

import Image from "next/image";
import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface HeroMemorialProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  photoUrl: string;
  backgroundUrl?: string;
  className?: string;
}

export function HeroMemorial({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  backgroundUrl = "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/9d1ef1c4-0116-4d12-84b4-c46a5816061f/photo/1755110398118_bg_image_3.png",
  className,
}: HeroMemorialProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const age = differenceInYears(deathDay, birthDay);
  const ageText = `${age} ${age === 1 ? 'год' : age >= 2 && age <= 4 ? 'года' : 'лет'} жизни`;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="backdrop-blur-[2px] bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch py-12 lg:py-20">
            {/* Left - Photo */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px]">
                <Image
                  src={photoUrl}
                  alt={`Фото ${fullName}`}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 480px"
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="flex flex-col justify-center items-start text-left px-4 lg:px-0">
              {/* Name */}
              <Typography.H1 
                className="text-white font-bold mb-0" 
                style={{ 
                  fontSize: "40px",
                  lineHeight: "1.2"
                }}
              >
                {fullName}
              </Typography.H1>

              {/* Age badge */}
              <div 
                className="inline-flex items-center px-4 py-1.5 rounded-full mt-10"
                style={{ 
                  backgroundColor: "#F6B95A",
                }}
              >
                <span 
                  className="font-light text-black"
                  style={{ 
                    fontSize: "16px",
                  }}
                >
                  {ageText}
                </span>
              </div>

              {/* Dates */}
              <div className="flex items-baseline mt-5">
                <span 
                  className="font-light"
                  style={{ 
                    color: "#8B8B8B",
                    fontSize: "20px" 
                  }}
                >
                  {birthDayMonth}
                </span>
                <span 
                  className="font-bold text-white ml-2"
                  style={{ 
                    fontSize: "20px" 
                  }}
                >
                  {birthYear}
                </span>
                <span 
                  className="text-white mx-3"
                  style={{ fontSize: "20px" }}
                >
                  –
                </span>
                <span 
                  className="font-bold text-white"
                  style={{ 
                    fontSize: "20px" 
                  }}
                >
                  {deathYear}
                </span>
                <span 
                  className="font-light ml-2"
                  style={{ 
                    color: "#8B8B8B",
                    fontSize: "20px" 
                  }}
                >
                  {deathDayMonth}
                </span>
              </div>

              {/* Location blocks */}
              <div className="flex flex-col gap-4 mt-12 w-full max-w-md">
                {/* Birth place */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <MapPin 
                      size={16} 
                      style={{ color: "#8B8B8B" }}
                      className="mr-2 flex-shrink-0" 
                    />
                    <span 
                      style={{ 
                        fontSize: "14px",
                        color: "#8B8B8B" 
                      }}
                    >
                      Место рождения
                    </span>
                  </div>
                  <Typography.P 
                    className="font-bold text-white mt-0"
                    style={{ 
                      fontSize: "20px",
                      marginLeft: "24px"
                    }}
                  >
                    {birthPlace}
                  </Typography.P>
                </div>

                {/* Death place */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <MapPin 
                      size={16} 
                      style={{ color: "#8B8B8B" }}
                      className="mr-2 flex-shrink-0" 
                    />
                    <span 
                      style={{ 
                        fontSize: "14px",
                        color: "#8B8B8B" 
                      }}
                    >
                      Место смерти
                    </span>
                  </div>
                  <Typography.P 
                    className="font-bold text-white mt-0"
                    style={{ 
                      fontSize: "20px",
                      marginLeft: "24px"
                    }}
                  >
                    {deathPlace}
                  </Typography.P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}