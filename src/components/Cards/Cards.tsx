import Card from '@/components/Card/Card'
import poyasnica from '../../../public/img/poyasnica.jpeg'
import nogi from '../../../public/img/nogi.jpeg'
import relax from '../../../public/img/relax.jpeg'
import sport from '../../../public/img/sport.jpeg'
import ruki from '../../../public/img/ruki.jpeg'
import shvz from '../../../public/img/shvz.jpeg'
import klassik from '../../../public/img/klassik.webp'
import limfo from '../../../public/img/limfo.png'

const cards = [
  {
    title: 'Классический массаж',
    image: klassik,
    description:
      'Одна из самых популярных и эффективных процедур для расслабления и улучшения общего ' +
      'состояния организма. Он помогает снять напряжение в мышцах, улучшить кровообращение и лимфоток, а также повысить' +
      ' тонус кожи.',
    cost: {
      express: 3000,
      full: 4000,
    },
    time: {
      express: 60,
      full: 90,
    },
  },
  {
    title: 'Расслабляющий массаж',
    image: relax,
    description:
      'Расслабляющий массаж может быть полезен для людей, страдающих от стресса, бессонницы, головных болей и других ' +
      'проблем со здоровьем. ',
    cost: {
      express: 3000,
      full: 4000,
    },
    time: {
      express: 60,
      full: 90,
    },
  },
  {
    title: 'Лимфодренажный массаж',
    image: limfo,
    description:
      'Лимфодренажный массаж может быть полезен для людей, страдающих от отеков, целлюлита, усталости и других проблем со здоровьем.',
    cost: {
      express: 2500,
      full: 3000,
    },
    time: {
      express: 45,
      full: 60,
    },
  },
  {
    title: 'Спортивный массаж',
    image: sport,
    description:
      'Спортивный массаж - это специальная техника массажа, разработанная для спортсменов и людей, ведущих активный ' +
      'образ жизни. Он помогает улучшить физическую форму, повысить выносливость и ускорить восстановление после тренировок.',
    cost: {
      express: 3000,
      full: 4000,
    },
    time: {
      express: 60,
      full: 90,
    },
  },
  {
    title: 'Массаж шейно-воротниковой зоны',
    image: shvz,
    description:
      'Во время массажа шейно-воротниковой зоны особое внимание уделяется проблемным зонам, таким как шея, плечи и верхняя часть спины.' +
      'Массажист работает с каждой мышцей, снимая напряжение и улучшая подвижность суставов',
    cost: {
      express: 1500,
      full: 0,
    },
    time: {
      express: 30,
      full: 0,
    },
  },
  {
    title: 'Массаж рук',
    image: ruki,
    description:
      'Во время массажа рук особое внимание уделяется проблемным зонам, таким как кисти, запястья и предплечья. Массажист' +
      ' работает с каждой мышцей, снимая напряжение и улучшая подвижность суставов',
    cost: {
      express: 1000,
      full: 0,
    },
    time: {
      express: 30,
      full: 0,
    },
  },
  {
    title: 'Массаж ноги + стопы',
    image: nogi,
    description:
      'Массаж ног помогает улучшить кровообращение и лимфоток, что способствует более быстрому восстановлению после' +
      ' напряженной работы или тренировок. Он также помогает снять мышечное напряжение и предотвратить боли в ногах и стопах',
    cost: {
      express: 1500,
      full: 0,
    },
    time: {
      express: 30,
      full: 0,
    },
  },
  {
    title: 'Массаж поясницы',
    image: poyasnica,
    description:
      'Массаж поясницы может быть полезен для людей, страдающих от болей в спине, вызванных сидячим образом жизни,' +
      ' неправильной осанкой или другими факторами. ',
    cost: {
      express: 1000,
      full: 0,
    },
    time: {
      express: 30,
      full: 0,
    },
  },
  {
    title: 'Массаж спины',
    image: klassik,
    description:
      'Массаж спины может быть полезен для людей, страдающих от болей в спине, вызванных сидячим образом жизни,' +
      ' неправильной осанкой или другими факторами. ',
    cost: {
      express: 2000,
      full: 0,
    },
    time: {
      express: 45,
      full: 0,
    },
  },
]
export default function Cards() {
  return (
    <ul className="grid grid-flow-col gap-2 overflow-x-auto overscroll-x-contain snap-mandatory scroll-ps-3 ">
      {cards.map((c, i) => (
        <Card
          key={i}
          title={c.title}
          image={c.image}
          cost={c.cost}
          time={c.time}
          description={c.description}
        />
      ))}
    </ul>
  )
}
