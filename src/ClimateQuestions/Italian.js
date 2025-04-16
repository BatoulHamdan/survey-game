const it = [
    {
      question: "Pensi che il riscaldamento globale stia accadendo?",
      options: ["Sì", "No", "Non so"]
    },
    {
      question: "Assumendo che il riscaldamento globale stia accadendo, pensi che sia…?",
      options: [
        "Causato principalmente dalle attività umane",
        "Causato principalmente dai cambiamenti naturali nell'ambiente",
        "Nessuna delle precedenti perché il riscaldamento globale non sta accadendo",
        "Altro",
        "Non so"
      ]
    },
    {
      question: "Quale delle seguenti affermazioni si avvicina di più alla tua opinione su ciò che pensano la maggior parte degli scienziati?",
      options: [
        "La maggior parte degli scienziati pensa che il riscaldamento globale stia accadendo",
        "Ci sono molte divergenze tra gli scienziati su se il riscaldamento globale stia accadendo o meno",
        "La maggior parte degli scienziati pensa che il riscaldamento globale non stia accadendo",
        "Non so abbastanza per dirlo"
      ]
    },
    {
      question: "Quanto sei d'accordo o in disaccordo con la seguente affermazione: Il riscaldamento globale sta influenzando il clima negli Stati Uniti.",
      options: ["Fortemente d'accordo", "Abbastanza d'accordo", "Abbastanza in disaccordo", "Fortemente in disaccordo"]
    },
    {
      question: "Quanto sei preoccupato per il riscaldamento globale?",
      options: ["Molto preoccupato", "Abbastanza preoccupato", "Poco preoccupato", "Per niente preoccupato"]
    },
    {
      question: "Quanto pensi che il riscaldamento globale danneggerà le piante e le specie animali?",
      options: ["Per niente", "Solo un po'", "Un quantitativo moderato", "Molto", "Non so"]
    },
    {
      question: "Quanto pensi che il riscaldamento globale danneggerà le future generazioni di persone?",
      options: ["Per niente", "Solo un po'", "Un quantitativo moderato", "Molto", "Non so"]
    },
    {
      question: "Quanto pensi che il riscaldamento globale danneggerà le persone nei paesi in via di sviluppo?",
      options: ["Per niente", "Solo un po'", "Un quantitativo moderato", "Molto", "Non so"]
    },
    {
      question: "Quanto pensi che il riscaldamento globale danneggerà le persone negli Stati Uniti?",
      options: ["Per niente", "Solo un po'", "Un quantitativo moderato", "Molto", "Non so"]
    },
    {
      question: "Quanto pensi che il riscaldamento globale danneggerà te personalmente?",
      options: ["Per niente", "Solo un po'", "Un quantitativo moderato", "Molto", "Non so"]
    },
    {
      question: "Quando pensi che il riscaldamento globale inizierà a danneggiare le persone negli Stati Uniti?",
      options: [
        "Stanno già subendo danni",
        "Tra 10 anni",
        "Tra 25 anni",
        "Tra 50 anni",
        "Tra 100 anni",
        "Mai"
      ]
    },
    {
      question: "Quanto sei d'accordo o in disaccordo con la seguente affermazione: “Ho personalmente vissuto gli effetti del riscaldamento globale”?",
      options: ["Fortemente d'accordo", "Abbastanza d'accordo", "Abbastanza in disaccordo", "Fortemente in disaccordo"]
    },
    {
      question: "Finanziare maggiori ricerche su fonti di energia rinnovabile, come l'energia solare e eolica.",
      options: ["Fortemente favorevole", "Abbastanza favorevole", "Abbastanza contrario", "Fortemente contrario"]
    },
    {
      question: "Regolare il diossido di carbonio (il principale gas serra) come inquinante.",
      options: ["Fortemente favorevole", "Abbastanza favorevole", "Abbastanza contrario", "Fortemente contrario"]
    },
    {
      question: "Richiedere alle aziende di combustibili fossili di pagare una tassa sul carbonio e usare i fondi per ridurre altre tasse (come la tassa sul reddito) in modo equivalente.",
      options: ["Fortemente favorevole", "Abbastanza favorevole", "Abbastanza contrario", "Fortemente contrario"]
    },
    {
      question: "Fornire rimborsi fiscali per chi acquista veicoli a energia efficiente o pannelli solari.",
      options: ["Fortemente favorevole", "Abbastanza favorevole", "Abbastanza contrario", "Fortemente contrario"]
    },
    {
      question: "Estrarre petrolio nel Rifugio Nazionale della Fauna Selvatica Artica.",
      options: ["Fortemente favorevole", "Abbastanza favorevole", "Abbastanza contrario", "Fortemente contrario"]
    },
    {
      question: "Espandere le trivellazioni offshore per il petrolio e il gas naturale lungo la costa degli Stati Uniti.",
      options: ["Fortemente favorevole", "Abbastanza favorevole", "Abbastanza contrario", "Fortemente contrario"]
    },
    {
      question: "Le scuole dovrebbero insegnare ai nostri bambini le cause, le conseguenze e le potenziali soluzioni al riscaldamento globale.",
      options: ["Fortemente d'accordo", "Abbastanza d'accordo", "Abbastanza in disaccordo", "Fortemente in disaccordo"]
    },
    {
      question: "Pensi che i seguenti dovrebbero fare di più o di meno per affrontare il riscaldamento globale? Le aziende e l'industria.",
      options: ["Molto di più", "Di più", "Stanno già facendo la giusta quantità", "Di meno", "Molto di meno"]
    },
    {
      question: "Il Presidente.",
      options: ["Molto di più", "Di più", "Stanno già facendo la giusta quantità", "Di meno", "Molto di meno"]
    },
    {
      question: "Il Congresso.",
      options: ["Molto di più", "Di più", "Stanno già facendo la giusta quantità", "Di meno", "Molto di meno"]
    },
    {
      question: "Il tuo Governatore.",
      options: ["Molto di più", "Di più", "Stanno già facendo la giusta quantità", "Di meno", "Molto di meno"]
    },
    {
      question: "I tuoi funzionari locali.",
      options: ["Molto di più", "Di più", "Stanno già facendo la giusta quantità", "Di meno", "Molto di meno"]
    },
    {
      question: "I cittadini stessi.",
      options: ["Molto di più", "Di più", "Stanno già facendo la giusta quantità", "Di meno", "Molto di meno"]
    },
    {
      question: "Il riscaldamento globale dovrebbe essere una priorità per il prossimo presidente e il Congresso?",
      options: ["Molto alta", "Alta", "Media", "Bassa"]
    },
    {
      question: "Dovrebbero essere una priorità le fonti di energia pulita?",
      options: ["Molto alta", "Alta", "Media", "Bassa"]
    },
    {
      question: "Generare energia rinnovabile (solare ed eolica) su terreni pubblici negli Stati Uniti.",
      options: ["Fortemente d'accordo", "Abbastanza d'accordo", "Abbastanza in disaccordo", "Fortemente in disaccordo"]
    },
    {
      question: "Supportare la transizione dell'economia degli Stati Uniti dai combustibili fossili all'energia pulita al 100% entro il 2050.",
      options: ["Fortemente d'accordo", "Abbastanza d'accordo", "Abbastanza in disaccordo", "Fortemente in disaccordo"]
    },
    {
      question: "Quanto spesso parli del riscaldamento globale con amici e familiari?",
      options: ["Spesso", "Occasionalmente", "Raramente", "Mai"]
    },
    {
      question: "Quanto spesso senti parlare del riscaldamento globale nei media?",
      options: [
        "Almeno una volta alla settimana",
        "Almeno una volta al mese",
        "Più volte all'anno",
        "Una volta all'anno o meno",
        "Mai"
      ]
    },
    {
      question: "Quanto grave valuti gli effetti personali del riscaldamento globale che hai sperimentato?",
      options: [
        "Per niente grave",
        "Léggermente grave",
        "Moderatamente grave",
        "Molto grave",
        "Non so / Non applicabile"
      ]
    },
    {
      question: "Saresti disposto a pagare bollette energetiche più alte per supportare lo sviluppo di più energia rinnovabile (solare, eolica, ecc.)?",
      options: ["Sì, sicuramente", "Probabilmente sì", "Probabilmente no", "Sicuramente no", "Non so"]
    },
    {
      question: "Quanto ti senti personalmente responsabile per aiutare a ridurre gli effetti del riscaldamento globale sulle future generazioni?",
      options: [
        "Per niente responsabile",
        "Leggermente responsabile",
        "Moderatamente responsabile",
        "Molto responsabile",
        "Non so"
      ]
    }
];

export default it;