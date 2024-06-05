import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    resources: {
      en: {
        translation: {
          headerOne: "Hello, my name is",
          headerTwo: "I am a front-end developer",
          aboutMeHeader: "About me",
          aboutMeOne:
            "Hi there, I am a 23 year-old front end developer based in Belgrade,Serbia.",
          aboutMeTwo:
            "Crafting web applications is my passion ever since I started coding at the end of 2022. Since then I have spent countless hours learning and developing front end applications.",
          aboutMeThree:
            "When I am not coding I like to be active, play basketball and go to the gym.",
          skills: "Skills",
          skillsOne:
            "Through my experience, I have acquired a thorough understanding of web development concepts and have dedicated a substantial amount of time to implementing them in real-world scenarios and applications.",
          projects: "Projects",
          projectsOne: "Here is the list of my projects so far!",
          projectsTwo: "Description",
          projectsThree: "Back",
          projectsFour: "Live",
          projectsDetailsOne:
            "This is fully responsive quiz built with Typescript, Redux, React router dom and tailwind. In this quiz you can choose difficulty and number of questions and get final results with number of correctly answered questions! ",
          projectsDetailsTwo:
            "Fast React Pizza is fully responsive app bulit with react router dom, react router form and tailwind. In this app you can register, order different types of pizza and get estimated time for delivery on your address!",
          projectsDetailsThree:
            "The Wild Oasis is application for managing hotel services bulit with React query, react hook form, supabase and styled components. In this application you can perview all bookings, check in/out guests, see weekly, monthly or yearly profit and many more!",
          projectsDetailsFour:
            "Musix app is fully responsive app built with react router dom, react query and tailwind. You can browse throw music albums, artists and songs and add them to your favourite list and stack them all in one place. In this app you can also preview songs and many more!",
          contactMe: "Contact me",
          contactName: "Full name",
          contactEmail: "Email",
          contactNumber: "Contact number",
          contactMessage: "Message",
          contactSend: "Send",
          toastSuccess:
            "Thank you for reaching out, I will be sure to respond as soon as possible!",
          toastError: "Make sure to fill up all fields!",
          toastErrorOne: "There was an error, try agian!",
          infoPhone: "Phone",
          infoLocation: "Location",
          infoBirth: "Date of Birth",
          infoPlace: "Belgrade, Serbia",
          infoCV: "Download CV",
        },
      },
      rs: {
        translation: {
          headerOne: "Zdravo, moje ime je",
          headerTwo: "Ja sam front-end developer",
          aboutMeHeader: "O meni",
          aboutMeOne:
            "Zdravo, Ja sam front end developer star 23 godine iz Beograda, Srbija.",
          aboutMeTwo:
            "Pravljenje web aplikacija je moja strast od kada sam počeo da se bavim kodiranjem krajem 2022. Od tada sam proveo nebrojano sati učeći i pravljeći front end aplikacije",
          aboutMeThree:
            "Kada ne kodiram volim da budem aktivan, igram košarku i idem u teretanu",
          skills: "Veštine",
          skillsOne:
            "Kroz svoje iskustvo, stekao sam temeljno razumevanje koncepata web razvoja i posvetio sam znatnu količinu vremena njihovoj primeni u realnim scenarijima i aplikacijama.",
          projects: "Projekti",
          projectsOne: "Evo liste mojih projekata do sada!",
          projectsTwo: "Opis",
          projectsThree: "Nazad",
          projectsFour: "Uživo",
          projectsDetailsOne:
            "Ovo je kviz potpuno prilagodljiv svim ekranima napravljen sa Typescript-om, Redux-om, React ruter dom-om i tailwind-om. U ovom kvizu možete da izaberete težinu i broj pitanja i dobijete konačne rezultate sa brojem tačno odgovorenih pitanja!",
          projectsDetailsTwo:
            "Fast React Pizza je potpuno prilagodljiva aplikacija koja je napravljena sa react ruter dom-om, react ruter form-om i tailwind-om. U ovoj aplikaciji možete se registrovati, naručiti različite vrste pica i dobiti procenjeno vreme isporuke na vašu adresu!",
          projectsDetailsThree:
            "The Wild Oasis je aplikacija za upravljanje hotelskim uslugama sa React query-em, react hook form-om, supabase-om i styled components-om. U ovoj aplikaciji možete pregledati sve rezervacije, prijaviti se/odjaviti goste, videti nedeljni, mesečni ili godišnji profit i još mnogo toga!",
          projectsDetailsFour:
            "Musix aplikacija je potpuno prilagodljiva aplikacija napravljena sa react ruter dom-om, react query i tailwind-om. Možete da pretražujete muzičke albume, izvođače i pesme i dodajete ih na svoju listu omiljenih i složite ih sve na jedno mesto. U ovoj aplikaciji takođe možete da pregledate pesme i još mnogo toga!",
          contactMe: "Kontaktiraj me",
          contactName: "Puno ime",
          contactEmail: "Email",
          contactNumber: "Kontakt telefon",
          contactMessage: "Poruka",
          contactSend: "Pošalji",
          toastSuccess:
            "Hvala vam što ste se obratili, sigurno ću odgovoriti u najkraćem mogućem roku!",
          toastError: "Obavezno popunite sva polja!",
          toastErrorOne: "Došlo je do greške, pokušajte ponovo!",
          infoPhone: "Telefon",
          infoLocation: "Lokacija",
          infoBirth: "Datum rodjenja",
          infoPlace: "Beograd, Srbija",
          infoCV: "Preuzmi CV",
        },
      },
    },
  });
