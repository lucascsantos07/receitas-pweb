import Link from 'next/link'

/* Receita 13
export default function Home(){
    return (
        <div>
            <div>Menu principal</div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
            </div>
        </div>
    )
} */

/* Receita 15 */
export default function Home(){
    return (
        <div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <Link href="/rota1">Rota1</Link> <br/><br/>
                <a href="/rota1">Rota 1, jeito antigo</a>
            </div>
        </div>
    )
}