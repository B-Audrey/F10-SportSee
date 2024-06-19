import './not-found.scss';

/**
 * NotFound functional component to display the 404 error page
 */
export default function NotFound() {
    return (
        <div className="not-found">
            <p>Oups...</p>
            <p>Une erreur est survenue, veuillez recommencer ultérieurement</p>
        </div>
    )
}
