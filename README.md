# Uzduotis

Uzduotis turi buti ivykdoma su naujausia Angular versija

# 1. Forma

Pirmoji uzduotis sukurti dinamine forma

- Vardas, Pavarde, el. pastas (laukai privalomi ir su validacijom). Boolean pasirinkimas - "Ar ieskai darbo?" (default true). Pasirinkimas (select) "Kokio lygio specialistas esi?" - "junior", "mid", "senior".
- Jeigu pasirenkama junior pozicija, papildomas formos laukelis "2+2" irasyt galima tik skaiciu. Atsakymas turi buti 4, jei irasomas ne 4 turi isijungti validacija po apacia rodyt kad neteisingai
- Jeigu pasirenka mid - atsiranda naujas laukelis description kur turi apibundint save neirasant a raides. Laukelis taip pat privalomas. Jei validacija nepreaina turi rodyt po apacia atitinkama teksta
- Jei pasirenka senior leidzia eiti i kita langa, kuriame yra mygtukas "pateikti aplikacija". Jeigu pries tai buvusiame lange buvo pazymejes boolean pasirinkima true, tada parodo teksta "aplikacija pateikta", jei buvo pazymejes false, tada atsiranda laukelis naujajame lange su klausimu "Motyvacinis laiskas", privalomas laukas su minimum 140 simboliu. Paspaudus mygtuka pateikti parodo visa forma json formatu (kartu su matyvaciniu laisku)

## Papildomai

- Naudot angular material
- pasiruosti aplinka su custom stiliumi
- Projekta ikelta i github - atsiusti nuoroda
