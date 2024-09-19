import Image from "next/image";
import styles from "./page.module.css";

// export async function generateMetadata({params,searchParams}){
//   const {name} = params.name;
//   const {title} = searchParams;

//   return {
//     title: `${name || "My App"} | Home`
//   };

// }

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      </main>
   
  );
}
