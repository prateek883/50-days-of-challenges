//Problem Statement: Given a DNA strand, return its RNA complement (per RNA transcription).

const transcription = (dna) => {
    let rna = ""

    for (let i=0; i<dna.length; i++){
        if(dna.charAt(i) === 'G') rna += 'C'
        if(dna.charAt(i) === 'C') rna += 'G'
        if(dna.charAt(i) === 'T') rna += 'A'
        if(dna.charAt(i) === 'A') rna += 'U'
    }

    return rna
}

console.log(transcription('GCT'))
console.log(transcription('GATC'))