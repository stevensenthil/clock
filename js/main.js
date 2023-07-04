					function time(){
							let today=new Date();
							console.log(today);
							
							let hrs=document.getElementById("hours");
							let hour=today.getHours();
							if(hour>12){
								hour=hour-12
							}
							hour=(hour<10)?"0"+hour:hour
							hrs.innerHTML=hour;
							
							let min=document.getElementById("minutes");
							let minute=today.getMinutes();
							minute=(minute<10)?"0"+minute:minute
							min.innerHTML=minute;
							
							let sec=document.getElementById("seconds");
							let second=today.getSeconds();
							second=(second<10)?"0"+second:second
							sec.innerHTML=second	
							
							let session=document.getElementById("session");
							let hour1=today.getHours();
							let sessions="AM";
							if(hour1=>12){
								sessions="PM";
								
							}
							session.innerHTML=sessions
							
							let day=document.getElementById("day");
							let days=today.getDay();
							 days=(days<10)?"0"+days:days
							day.innerHTML=days
							
							let date=document.getElementById("date");
							let dates=today.getDate();
							dates=(dates<10)?"0"+dates:dates
							date.innerHTML=dates
							
							
							let month=document.getElementById("month");
							let months=today.getMonth()+1;
							months=(months<10)?"0"+months:months
							month.innerHTML=months
							
							let year=document.getElementById("year");
							let years=today.getFullYear();
							year.innerHTML=years
					}
					setInterval(time,1000)