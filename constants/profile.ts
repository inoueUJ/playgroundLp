export type Profile = {
  id: number;
  name: string;
  instruments: string;
  anniversary: string;
  constellation: string;
  bloodType: string;
  birthplace: string;
  hobbies: string;
  image: string;
  instagram_url: string;
};

// メンバープロファイルのデータ
export const profiles: Profile[] = [
  {
    id: 1,
    name: "かいり",
    instruments: "Vocal&Guitar",
    anniversary: "2002.07.29(22)",
    constellation: "獅子座",
    bloodType: "AB型",
    birthplace: "宮崎県宮崎市",
    hobbies: "釣り,編み物",
    image: "./profile_kairi.webp",
    instagram_url: "https://www.instagram.com/kai729_bb?igsh=YWdra2c1ZHc1azZi",
  },
  {
    id: 2,
    name: "しんのすけ",
    instruments: "Bass",
    anniversary: "2002.11.07(22)",
    constellation: "さそり座",
    bloodType: "AB型",
    birthplace: "福岡県田川市",
    hobbies: "釣り,アクセサリー作り",
    image: "./profile_shin.webp",
    instagram_url:
      "https://www.instagram.com/sh.in_bb?igsh=MXNzcmtnMXBreDJwOQ==",
  },
  {
    id: 3,
    name: "りょうすけ",
    instruments: "Drums",
    anniversary: "2002.11.30(22)",
    constellation: "射手座",
    bloodType: "A型",
    birthplace: "福岡県北九州市",
    hobbies: "古着巡り,お話し",
    image: "./profile_ryunosuke.webp",
    instagram_url: "https://www.instagram.com/ryo.u_bb?igsh=NzNsZGk2bGV5bGNt",
  },
];
