import React from "react";

interface Props {
    loading?: boolean,
}

const LoadingIndicator: React.FC<Props> = ({loading}) => {
    if (!loading) {
        return null;
    }
    return <div> loading </div>
}

export default LoadingIndicator
