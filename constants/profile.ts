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
};

// メンバープロファイルのデータ
export const profiles: Profile[] = [
  {
    id: 1,
    name: "しんのすけ",
    instruments: "Guitar",
    anniversary: "2002.10.07(22)",
    constellation: "牡羊座",
    bloodType: "O型",
    birthplace: "福岡",
    hobbies: "古着巡り",
    image: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    instruments: "Drums",
    anniversary: "2002.10.07(22)",
    constellation: "乙女座",
    bloodType: "O型",
    birthplace: "福岡",
    hobbies: "古着巡り",
    image: "",
  },
  {
    id: 3,
    name: "Alice Brown",
    instruments: "Bass",
    anniversary: "2002.10.07(22)",
    constellation: "蠍座",
    bloodType: "O型",
    birthplace: "福岡",
    hobbies: "古着巡り",
    image: "",
  },
];
