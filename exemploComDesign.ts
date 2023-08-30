abstract class Media {
  abstract calcularMedia(data: number[],  peso: number[]): number;
}

class NotaAluno extends Media {
  calcularMedia(data: number[]): number {
      const soma = data.reduce((total, value) => total + value, 0);
      return soma / data.length;
  }
}

class PonderadaAluno extends Media {
  calcularMedia(data: number[], peso: number[]): number {
    if (data.length !== peso.length) {
      throw new Error("O número de notas deve ser igual ao número de pesos");
    }

    const somaProdutos = data.reduce((total, value, index) => total + value * peso[index], 0);
    const somaPesos = peso.reduce((total, weight) => total + weight, 0);

    return somaProdutos / somaPesos;
  }
}

class MediaFactory {
  static criarTipoMedia(tipo: string): Media {
    if (tipo === "normal") {
      return new NotaAluno();
    } else if (tipo === "ponderada") {
      return new PonderadaAluno();
    } else {
      throw new Error("Tipo de média desconhecido");
    }
  }
}

const data = [85, 90, 78, 95, 88];
const pesos = [1,2,2,1,1]

const mediaNormal = MediaFactory.criarTipoMedia("normal");
const normalMedia = mediaNormal.calcularMedia(data,pesos);
console.log(`A média das notas é (normal): ${normalMedia}`);

const mediaPonderada = MediaFactory.criarTipoMedia("ponderada");
const ponderadaMedia = mediaPonderada.calcularMedia(data,pesos);
console.log(`A média das notas é (ponderada): ${ponderadaMedia}`);
