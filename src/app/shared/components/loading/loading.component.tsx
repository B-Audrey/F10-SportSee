import './loading.component.scss'

/**
 * Loading functional component to display the loader in front of the content
 */
export default function Loading() {
    return <div className="loader-container">
        <div className="loader loaderA"></div>
        <div className="loader loaderB"></div>
        <div className="loader loaderC"></div>
    </div>
}
