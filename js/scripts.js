window.onload = () => {
    document.querySelector('#btn-excusa').addEventListener('click', () => {
        document.querySelector('#excusa').innerHTML = obtenerExcusa();
    });
}
let obtenerExcusa = () => {

    let
        pronoun = ['A', 'The'],
        subject = ['jogger', 'racoon', 'dog', 'driver', 'comedian', 'pincone'],
        action = ['too my', 'threw my', 'yelled at my', 'stole my', 'bit my', ],
        posetion = ['homework', 'toe', 'car', 'shoe'],
        where = ['on the street', 'in my house', 'in my driveway'];

    let
        pronounIndex = Math.floor(Math.random() * pronoun.length),
        subjectIndex = Math.floor(Math.random() * subject.length),
        actionIndex = Math.floor(Math.random() * action.length),
        posetionIndex = Math.floor(Math.random() * posetion.length),
        whereIndex = Math.floor(Math.random() * where.length);

    return pronoun[pronounIndex] + " " + subject[subjectIndex] + " " + action[actionIndex] + " " + posetion[posetionIndex] + " " + where[whereIndex];
}