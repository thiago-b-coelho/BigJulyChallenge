"use client";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Recipes from "@/components/Recipes";
import withAuth from "@/components/withAuth";

const Home = () => {

  return (
    <div>
      <Navbar />
      <Header title="Recipe Dashboard" type="Home" />
      <section className="md:max-w-[1440px] mx-auto px-4 bg-black">
        <Recipes />
      </section>
    </div>
  );
};

export default withAuth(Home);