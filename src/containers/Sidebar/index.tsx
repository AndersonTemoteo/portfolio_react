import Avatar from '../../components/Avata'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SiderbarContainer } from './styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar tema</BotaoTema>
    </SiderbarContainer>
  </aside>
)

export default Sidebar
