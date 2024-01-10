const url = 'https://randomuser.me/api/';
const GetButton = document.querySelector('#GetUser');
const ListItems = document.querySelectorAll('.ListItems');
const Image = document.querySelector('img');
const Name = document.querySelector('#Name');
const ChangeDetails = document.querySelector('.ChangeDetail');
const UserDetails = document.querySelector('.UserDetails')
const AllUserDetails = UserDetails.childNodes;

ListItems.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        if (e.id === 'Name') {
            AllUserDetails.forEach(x => {
                if(x.nodeName != '#text' && x.id === 'Name'){
                    ChangeDetails.innerHTML = 'Name';
                    x.className = 'Active';
                }else{
                    x.className = 'NonActive'
                }
            });
        } else if (e.id === 'Email') {
            AllUserDetails.forEach(x => {
                if(x.nodeName != '#text' && x.id === 'Email'){
                    ChangeDetails.innerHTML = 'Email'
                    x.className = 'Active'
                }else{
                    x.className = 'NonActive'
                }
            });
        } else if (e.id === 'DOB') {
            AllUserDetails.forEach(x => {
                if(x.nodeName != '#text' && x.id === 'DOB'){
                    ChangeDetails.innerHTML = 'Date of Birth'
                    x.className = 'Active'
                }else{
                    x.className = 'NonActive'
                }
            });
        } else if (e.id === 'Address') {
            AllUserDetails.forEach(x => {
                if(x.nodeName != '#text' && x.id === 'Address'){
                    ChangeDetails.innerHTML = 'Address'
                    x.className = 'Active'
                }else{
                    x.className = 'NonActive'
                }
            });
        } else if (e.id === 'PhoneNumber') {
            AllUserDetails.forEach(x => {
                if(x.nodeName != '#text' && x.id === 'PhoneNumber'){
                    ChangeDetails.innerHTML = 'Phone Number'
                    x.className = 'Active'
                }else{
                    x.className = 'NonActive'
                }
            });
        } else if (e.id === 'Password') {
            AllUserDetails.forEach(x => {
                if(x.nodeName != '#text' && x.id === 'Password'){
                    ChangeDetails.innerHTML = 'Password'
                    x.className = 'Active'
                }else{
                    x.className = 'NonActive'
                }
            });
        } else{
            console.log("Not Executed");
        }
    })
});

GetButton.addEventListener('click', async () => {
    const Data = await GetUser();
    Image.src = Data.img;
    AllUserDetails.forEach((t)=>{
        if(t.nodeName !='#text'){
            if(t.id === 'Name'){
                t.innerHTML = Data.UserName;
            }
            if(t.id === 'Email'){
                t.innerHTML = Data.Email;
            }
            if(t.id === 'DOB'){
                t.innerHTML = Data.Date;
            }
            if(t.id === 'Address'){
                t.innerHTML = Data.Address;
            }
            if(t.id === 'PhoneNumber'){
                t.innerHTML = Data.PhoneNumber;
            }
            if(t.id === 'Password'){
                t.innerHTML = Data.Password;
            }
        }
    })
});

async function GetUser() {
    const Response = await fetch(url);
    const Data = await Response.json();

    const Results = Data.results;

    if (Results.length > 0) {
        const user = Results[0];

        //User Name
        const UserName = user.name.title + " " + user.name.first + " " + user.name.last;

        //Email
        const Email = user.email;

        //Date of Birth
        const DateOfBirth = user.dob.date
        const datePart = DateOfBirth.split("T")[0];
        const dateParts = datePart.split("-");
        const convertedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

        //Address
        const Address = `${user.location.street.number}, ${user.location.street.name} ${user.location.city} ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;

        //Phone Number
        const PNUmber = user.phone;

        //Password
        const Password = user.login.password;

        //URL of the image
        const ImageURL = user.picture.large;
        return {
            UserName: UserName,
            Email: Email,
            Date: convertedDate,
            Address: Address,
            PhoneNumber: PNUmber,
            Password: Password,
            img: ImageURL
        }
    }
}
