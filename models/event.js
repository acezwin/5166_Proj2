const{DateTime} = require("luxon");
const {v4: uuid4} = require('uuid');
const eventCat = ['Inperson', 'Virtual'];

const events = [{
    id: '1',
    category: 'Inperson',
    name:  'Comic Con',
    where: '501 S College St Charlotte, NC 28202 United States',
    startdate: '2022-06-24',
    enddate: '2022-06-26',
    starttime: '09:00',
    url: 'https://www.heroesonline.com/blog/wp-content/uploads/2021/07/HCTHOR-WEB-BLOG-420x630.jpg',
    details: 'Charlotte and Carolina’s biggest comic convention is HeroesCon, which started in 1982 with the owner of Heroes Aren’t Hard To Find comics shop. The convention is famous for its comics-first and family-friendly atmosphere, where fans can mingle directly with professionals and exhibitors in a small city venue.',
    // createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
},
{
    id: '2',
    category: 'Inperson',
    name:  'Ichiban con',
    where: '5400 John Q Hammons Dr NW Concord NC, 28027',
    startdate: '2022-01-13',
    enddate: '2022-01-16',
    starttime: '09:00',
    url: 'https://ichibancon.com/wp-content/uploads/2019/02/cropped-ichibancon_2020_header.jpg',
    details: 'The Ichibancon Arcade returns for 2021! The room will be jam packed with lots of great rhythm games as well as many classics. All on free play! Information on games available to play will be coming soon!',

    // createdAt: DateTime.local(2021, 9,30,18,0).toLocaleString(DateTime.DATETIME_SHORT),
},
{
    id: '3',
    category: 'Inperson',
    name:  'Dance with Us',
    where: '501 S College St Charlotte, NC 28202 United States',
    startdate: '2022-06-24',
    enddate: '2022-06-26',
    starttime: '09:00',
    url: 'https://th.bing.com/th/id/OIP.sg5sePFlxOceMe0rueiQowHaE8?pid=ImgDet&rs=1',
    details: 'Learn to dance with us over one night, make sure to bring a partner!',
    // createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
},
{
    id: '4',
    category: 'Virtual',
    name:  'Movie Night',
    where: '501 S College St Charlotte, NC 28202 United States',
    startdate: '2022-06-24',
    enddate: '2022-06-26',
    starttime: '09:00',
    url: 'https://th.bing.com/th/id/R.82af310367cb91f8af8e18b9cf850ac0?rik=fglzGuzq2lelJA&riu=http%3a%2f%2fwww.ranklogos.com%2fwp-content%2fuploads%2f2012%2f04%2fthe-movies-logo-1.gif&ehk=dM1wWDSCWOncY765CBJ80e7yBmHFlsxxpqsRGMBBBP8%3d&risl=&pid=ImgRaw&r=0',
    details: 'Lets watch a movie together with friends online! No covid invited!',
    // createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
},
{
    id: '5',
    category: 'Virtual',
    name:  'Fight or Flight Game Show',
    where: '501 S College St Charlotte, NC 28202 United States',
    startdate: '2022-06-24',
    enddate: '2022-06-26',
    starttime: '09:00',
    url: 'https://assets.thehansindia.com/h-upload/2020/05/26/971970-zoom.jpg',
    details: 'Lets watch a movie together with friends online! No covid invited!',
    // createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
},
{
    id: '6',
    category: 'Virutal',
    name:  'League Night',
    where: '501 S College St Charlotte, NC 28202 United States',
    startdate: '2022-06-24',
    enddate: '2022-06-26',
    starttime: '09:00',
    url: 'https://assets.thehansindia.com/h-upload/2020/05/26/971970-zoom.jpg',
    details: 'Lets watch and play together with friends online! No covid invited!',  
}];
// exports.find = function(){
//     return events;
// }

exports.find = () => events;
// exports.myCat = () =>eventCat;

exports.findByid = function(id){
    return events.find(event => event.id === id);
}

exports.save = function(event){
    event.id =uuid4();
    // event.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    events.push(event);
};
exports.updateById = function(id, newEvent){
    let event = events.find(event => event.id === id);

    if(event){
        event.category = newEvent.category;
        event.name = newEvent.name;
        event.where = newEvent.where;        
        event.startdate = newEvent.startdate;
        event.enddate = newEvent.enddate;
        event.starttime = newEvent.starttime;
        event.url = newEvent.url;
        event.details = newEvent.details;
        console.log(event);
        console.log(newEvent);

        return true;
    }
    else{
        return false;
    }
}
exports.deleteById = function(id){
    //find event matching id
    let index = events.findIndex(event => event.id === id);
    //deleting
    if(index !== -1){
        events.splice(index, 1);
        return true;
    }
    else{
        return false; 
    }
}