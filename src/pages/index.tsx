
import { CallToAction } from "@/components/call-to-action";
import CustumerStorySection from "@/components/custumer-story-section/custumer-story-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SupportSection } from "@/components/support-section";

import {allPosts} from '.contentlayer/generated'

export default function Home() {
  console.log(allPosts)
  return (
    <>
    <article className="flex flex-col" >
     
      <HeroSection/>
     <FeatureSection/>
     <SupportSection/>
     <CustumerStorySection/>
     <CallToAction/>
    </article>
    </>
  );
}
