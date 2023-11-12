import { Container } from "react-bootstrap";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import ProjectPreview from "../components/ProjectPreview";

const frameworks_list = [
    {src : './icons/ionic_icon.png', title : 'Ionic', width : '50px'},
    {src : './icons/react_icon.png', title : 'React', width : '50px'},
    {src : './icons/firebase_icon.png', title : 'Firebase', width : '50px'}
]

export const ProjectPageBLUBBLE = () => {
    return (
        <div>
            <NavbarComponent />
            <ProjectPreview 
                title="BLUBBLE - Studentproject"
                src="./images/blubble_single.png"
                subtitle="Reading Club Application for planning and hosting discussions Studentproject"
                content="Blubble is a book club application that is designed to help book lovers structure and plan their discussions like never before. With Blubble, we have created an innovative tool that offers a wide range of features to make book club discussions more engaging, organized, and productive. "
                github="https://github.com/orgs/Diva-E-HTW-BookClub/repositories"
                link="https://showtime.f4.htw-berlin.de/ws22/bachelor/b6-book-reading-club-applikation/"
                frameworks={frameworks_list}
            />
            <Container fluid className="project-page-bottom-container">
                <div className="project-page-content-container">
                    <img className="project-page-image" src="./images/blubble_single.png" id="scrollRef"></img>
                    <p className="color-dark"> 
                    Create, Discover, and Join Book Clubs Once you register in our app, you can create your own club centered around any book of your choice, be it nonfiction or fiction, which you can look up in OpenLibrary containing a vast collection of books from diverse genres and in various languages. After you have created your club, you become its moderator and can modify it by altering the name or increasing the number of members allowed to join. Furthermore, you can also participate in book clubs created by other people. You can find these clubs by their name, book title or author.
                    </p>
                </div>
            </Container>
            <FooterComponent/>
        </div>
    );
}