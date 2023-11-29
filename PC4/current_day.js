class CurrentDay {
  constructor(dateProvider, schedule) {
    this.dateProvider = dateProvider;
    this.schedule = schedule;
  }
  
  workday() {
    const today = this.dateProvider.today();
    return !this.schedule.holidays.includes(today);
  }
}
  
// En el código de producción
const currentDay = new CurrentDay(Date, new MonthlySchedule());
  
// En el código de prueba
const dateProvider = { today: () => new Date(2020, 12, 16) };
const testCurrentDay = new CurrentDay(dateProvider, new MonthlySchedule());

    