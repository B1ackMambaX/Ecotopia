import { Typography, Paper } from "@mui/material";
import first from '../../resources/icons/first.svg';
import second from '../../resources/icons/second.svg';
import third from '../../resources/icons/third.svg';

import './features.scss';

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <Typography color={'var(--green)'} variant="h3" component="h2" textAlign="center" mt={10} mb={10}>Как ты можешь это сделать?</Typography>
                <Paper elevation={4} sx={{p: 3, display: 'flex', alignItems: 'center', mb: 3, gap: '30px', borderRadius: '25px'}}>
                    <img src={first} alt="icon" className="features__icon" />
                    <div className="features__info">
                        <h3 className="features__heading">Прочитай статьи об экологии</h3>
                        <p className="features__descr">Приглашаем вас присоединиться к нашему интернет-коммьюнити эко-активистов, где Вы сможете найти интересные факты об экологии, получить советы по сортировке мусора и многое другое. Мы уверены, что с вашей помощью мы сможем добиться большего в создании более экологически чистого города. Присоединяйтесь к нашему сообществу уже сегодня!</p>
                    </div>
                </Paper>

                <Paper elevation={4} sx={{p: 3, display: 'flex', alignItems: 'center', mb: 3, gap: '30px', borderRadius: '25px'}}>
                    <img src={second} alt="icon" className="features__icon" />
                    <div className="features__info">
                        <h3 className="features__heading">Посети эко-мероприятия</h3>
                        <p className="features__descr">На таких мероприятиях вы сможете получить много полезной информации о том, как сделать свою жизнь более экологичной, а также познакомиться с людьми, которые разделяют вашу страсть к природе и экологии.</p>
                    </div>
                </Paper>

                <Paper elevation={4} sx={{p: 3, display: 'flex', alignItems: 'center', mb: 3, gap: '30px', borderRadius: '25px'}}>
                    <img src={third} alt="icon" className="features__icon" />
                    <div className="features__info">
                        <h3 className="features__heading">Сообщи о нарушениях</h3>
                        <p className="features__descr">Если вы заметили нарушения в области экологии, например, незаконную вырубку леса или выбросы вредных веществ в атмосферу, не стесняйтесь сообщить об этом нам. Совместными усилиями мы сможем сделать мир лучше!</p>
                    </div>
                </Paper>
            </div>
        </section>
    );
};
export default Features;