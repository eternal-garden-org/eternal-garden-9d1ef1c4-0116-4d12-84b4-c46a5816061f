import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { HeroMemorial } from "@/components/hero-memorial";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout>
      <HeroMemorial
        fullName="Александр Викторович Карпук"
        birthDate="1973-02-13"
        deathDate="2025-08-13"
        photoUrl="http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/9d1ef1c4-0116-4d12-84b4-c46a5816061f/photo/1755110375236_main_image_3.png"
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
      />
      <Container>
        <MemorialInfo />
        <MemorialBio />
      </Container>
      <MemorialQuotes />
      <Container>
        <MemorialMedia />
        <MemorialPhotos />
        <MemorialWords />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}