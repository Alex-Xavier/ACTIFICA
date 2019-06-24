import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions
} from 'react-native';

export default class PolicyScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.titleTextPrimary}>Política de Privacidade do Aplicativo ACT</Text>

          <Text style={styles.titleText}>1.ACEITAÇÃO</Text>
          
          <Text style={styles.text}>
            Este é um contrato firmado entre você, de agora em diante denominado como usuário, e ACTIFICA, grupo responsável pelo desenvolvimento e disponibilização do aplicativo, que de agora em diante será denominado simplesmente de ACT. Este “Termo de Privacidade do Aplicativo” rege o uso do aplicativo ACT disponibilizado gratuitamente pela ACT. Se você não concordar com estes termos não use este aplicativo. Você reconhece que analisou e aceitou as condições de uso. Leia-as atentamente pois ao utilizar este aplicativo significa que você aceitou todos os termos e concorda em cumpri-los. A aceitação é indispensável e obrigatória para a utilização dos serviços do aplicativo (ACT).
            Este “termo” constitui em um documento exclusivo entre a ACT e o usuário, substituindo, deste modo, todos os acordos, representações, garantias e entendimentos anteriores com relação ao aplicativo (ACT), seus conteúdos, produtos ou serviços fornecidos por meio do aplicativo. A qualquer momento, caso o usuário não concorde com os termos, deverá acessar imediatamente as configurações de seu dispositivo e efetuar a desinstalação do aplicativo ACT.
          </Text>

          <Text style={styles.titleText}>2.LICENÇA E SOFTWARE LIVRE</Text>
          
          <Text style={styles.text}>
            Por se tratar de um software livre, a ACT não se responsabiliza por quaisquer alterações realizadas no código ou na finalidade do aplicativo. A venda, transferência, modificação, engenharia reversa ou distribuição bem como a cópia de textos, imagens ou quaisquer partes nele contida não é de responsabilidade da ACT.
          </Text>

          <Text style={styles.titleText}>3.ALTERAÇÕES, MODIFICAÇÕES E RESCISÃO</Text>

          <Text style={styles.text}>
            A ACT reserva-se no direito de, a qualquer tempo, modificar estes termos seja incluindo, removendo ou alterando quaisquer de suas cláusulas. Tais modificações terão efeito imediato. Após publicadas tais alterações, ao continuar com o uso do aplicativo você terá aceitado e concordado em cumprir os termos modificados. A ACT pode, de tempos em tempos, modificar ou descontinuar (temporária ou permanentemente) a distribuição ou a atualização deste aplicativo. A ACT não é obrigada a fornecer nenhum serviço de suporte para este aplicativo. O usuário não poderá responsabilizar a ACT nem seus diretores, executivos, funcionários, afiliados, agentes, contratados ou licenciadores por quaisquer modificações, suspensões ou descontinuidade do aplicativo.
          </Text>

          <Text style={styles.titleText}>4.CONSENTIMENTO PARA COLETA E USO DE DADOS</Text>
          
          <Text style={styles.text}>
            Você concorda que a ACT pode coletar e usar dados técnicos de seu dispositivo tais como especificações, configurações, versões de sistema operacional e tipo de conexão à internet. Em hipótese alguma o aplicativo ACT coletará informações pessoais dos usuários.
          </Text>

          <Text style={styles.titleText}>5.ISENÇÃO DE GARANTIAS E LIMITAÇÕES DE RESPONSABILIDADE</Text>
          
          <Text style={styles.text}>
            Este aplicativo estará em contínuo desenvolvimento e pode conter erros e, por isso, o uso é fornecido "no estado em que se encontra" e sob risco do usuário final. Na extensão máxima permitida pela legislação aplicável a ACT e seus fornecedores isentam-se de quaisquer garantias e condições expressas ou implícitas incluindo, sem limitação, garantias de comercialização, adequação a um propósito específico, titularidade e não violação no que diz respeito ao aplicativo e qualquer um de seus componentes ou ainda à prestação ou não de serviços de suporte. A ACT não garante que a operação deste aplicativo seja contínua e sem defeitos. Exceto pelo estabelecido neste documento não há outras garantias, condições ou promessas aos aplicativos, expressas ou implícitas, e todas essas garantias, condições e promessas podem ser excluídas de acordo com o que é permitido por lei sem prejuízo à ACT e seus colaboradores.

            I. A ACT não garante, declara ou assegura que o uso deste aplicativo será ininterrupto ou livre de erros e você concorda que a ACT poderá remover por períodos indefinidos ou cancelar este aplicativo a qualquer momento sem que você seja avisado.

            II. A ACT não garante, declara nem assegura que este aplicativo esteja livre de perda, interrupção, ataque, vírus, interferência, pirataria ou outra invasão de segurança e isenta-se de qualquer responsabilidade em relação à essas questões. Você é responsável pelo backup do seu próprio dispositivo.

            III. Em hipótese alguma a ACT, bem como seus diretores, executivos, funcionários, afiliadas, agentes, contratados ou licenciadores responsabilizam-se por perdas ou danos causados pelo uso do aplicativo.
          </Text>

          <Text style={styles.titleTextPrimary}>Belo Horizonte, 21 de junho de 2019.</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: Dimensions.get('window').height * 0.03,
    backgroundColor: '#FFF'
  },
  text: {
    textAlign: 'justify'
  },
  titleTextPrimary: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: Dimensions.get('window').height * 0.02
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: Dimensions.get('window').height * 0.01
  }
});