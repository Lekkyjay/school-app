import UserCard from '@/components/UserCard'

export default function Admin() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            {/* <CountChart /> */}
            CountChart goes here
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            {/* <AttendanceChart /> */}
            AttendanceChart goes here
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          {/* <FinanceChart /> */}
          FinanceChart goes here
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* <EventCalendar />
        <Announcements/> */}
        EventCalendar goes here
        Announcements goes here
      </div>
    </div>
  )
}
