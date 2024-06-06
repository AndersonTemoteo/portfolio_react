import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SiderbarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SiderbarContainer>
      <Avatar />
      <Titulo fontSize={20}>Anderson Temoteo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        AndersonTemoteo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro fron-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SiderbarContainer>
  </aside>
)

export default Sidebar
