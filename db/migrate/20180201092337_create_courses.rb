class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :code
      t.string :title
      t.string :description
      t.integer :semester

      t.timestamps
    end
  end 
end

#[shell_cmd: ruby "C:\Users\倪倪\Desktop\Timetable-master\Timetable-master\db\migrate\20120129092337_create_courses.rb"]
#[dir: C:\Users\倪倪\Desktop\Timetable-master\Timetable-master\db\migrate]
#[path: %CATALINA_HOME%\bin;C:\ProgramData\Oracle\Java\javapath;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\Java\jdk1.8\bin;F:\Ult