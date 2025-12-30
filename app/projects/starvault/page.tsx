function StarVault() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto mt-[3rem]  flex flex-col items-center ">
        <h1>STAR VAULT</h1>
      </div>
    </>
  );
}
export default StarVault;
export const metadata = {
  title: "Star Vault | Projects",
  description:
    "Star Vault is an immersive 3D journaling system that lets users store memories as stars in galaxies. Built with React Three Fiber, Motion One, and Vite.",
  openGraph: {
    title: "Star Vault | Raeef Chowdhury",
    description:
      "An immersive 3D journaling system where memories become stars in personalized galaxies.",
    url: "https://star-vault-journal.netlify.app/",
    images: [
      {
        url: "/portfolio/Images/Star-Vault.png",
        width: 1200,
        height: 630,
        alt: "Star Vault 3D galaxy journaling interface",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Vault | Projects",
    description:
      "An immersive 3D journaling system where memories become stars in personalized galaxies.",
    images: ["/portfolio/Images/Star-Vault.png"],
  },
};
