import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      icon: "Cpu",
      title: "Мощные игровые ПК",
      description: "Собираем компьютеры для любых задач — от киберспорта до профессионального стриминга"
    },
    {
      icon: "Wrench",
      title: "Быстрый ремонт",
      description: "Диагностика за 30 минут. Большинство ремонтов выполняем в день обращения"
    },
    {
      icon: "Shield",
      title: "Гарантия 12 месяцев",
      description: "Даём официальную гарантию на все работы и комплектующие"
    },
    {
      icon: "Award",
      title: "Опыт с 2015 года",
      description: "Более 2000 довольных клиентов в Волжском и области"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
      <div className="max-w-md mx-auto px-4 py-8">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
          
          <div className="relative h-80 overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/projects/eab390ad-6635-48d1-b622-a0577f7a011a/files/eeabe814-14d8-4477-acee-211a68ae0273.jpg"
              alt="Gaming PC"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in">
                Лучшие игровые ПК
              </h1>
              <p className="text-white/90 text-lg">
                и ремонт в г. Волжский
              </p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <Card 
                  key={index}
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name={advantage.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{advantage.title}</h3>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/eab390ad-6635-48d1-b622-a0577f7a011a/files/be1761df-9c62-412c-894a-00397b05fc42.jpg"
                alt="Computer Repair"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-medium">Профессиональный сервис</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a 
                href="tel:+79950272707"
                className="block"
              >
                <Button 
                  className="w-full h-14 text-lg font-semibold bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (995) 027-27-07
                </Button>
              </a>
              
              <a 
                href="https://xn--80aalcbkr0aosgeh.xn--p1ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  variant="outline"
                  className="w-full h-14 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icon name="Globe" className="mr-2" size={20} />
                  комплаб.рф
                </Button>
              </a>
            </div>

            <div className="text-center pt-4 pb-2">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Icon name="MapPin" size={16} />
                г. Волжский
              </p>
            </div>

          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            Поделитесь с друзьями! 
          </p>
        </div>

      </div>
    </div>
  );
};

export default Index;
