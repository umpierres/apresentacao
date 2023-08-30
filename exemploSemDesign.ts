abstract class MediaS {
    abstract calcularMedia(data: number[]): number;
  }
  
  class NotaAlunoS extends Media {
    calcularMedia(data: number[]): number {
      const soma = data.reduce((total, value) => total + value, 0);
      return soma / data.length;
    }
  }
  
  const notasAluno = new NotaAluno();
  const dataS = [85, 90, 78, 95, 88];
  const media = notasAluno.calcularMedia(data);
  console.log(`A média das notas é: ${media}`);
  