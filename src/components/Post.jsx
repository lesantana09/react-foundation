
import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from './Avatar';
import { Comment } from './Comment'
import { useState } from 'react';
import styles from './Post.module.css';
import ptBR from 'date-fns/locale/pt-BR'

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!',
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publisheddateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })    
    const publishedDateRelativeToNow = formatDistanceToNow(
        publishedAt, {
            locale: ptBR,
            addSuffix: true,
        }
    )

    function handleCreateNewComment(event){
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handleCreateNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        });
        setComments(commentWithoutDeletedOne)

    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>                    
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publisheddateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment"
                    placeholder="Deixe um comentário" 
                    value={newCommentText}
                    onChange={handleCreateNewCommentChange}
                />                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            ondeleteComment={deleteComment}
                        />   
                    )
                })}
                                   
            </div>
        </article>
    )
}