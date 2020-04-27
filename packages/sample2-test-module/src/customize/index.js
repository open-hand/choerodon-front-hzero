import { setCard } from 'hzero-front/lib/customize/cards';

setCard({ code: 'test', component: () => import('./TestCard') });
