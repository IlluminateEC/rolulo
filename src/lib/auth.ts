import {goto} from '$app/navigation';
import {AtprotoDohHandleResolver, BrowserOAuthClient, OAuthSession} from '@atproto/oauth-client-browser';

export let session: OAuthSession|undefined;
let client: BrowserOAuthClient;

(async () => {
  client = await BrowserOAuthClient.load({
    clientId: 'https://rolulo.pages.dev/atproto-metadata.json',
    handleResolver: new AtprotoDohHandleResolver(
        {dohEndpoint: 'https://cloudflare-dns.com/dns-query'})
  });

  client.addEventListener(
      'deleted',
      (
          event: CustomEvent<{sub: string}>,
          ) => {
        goto('/');
      },
  );

  const result = await client.init();

  session = result?.session;

  if (result) {
    console.log(`${result.session.sub} was restored (last active session)`);
  }
})()

export async function login(handle: string) {
  try {
    await client.signIn(handle, {
      prompt: 'none',
      signal: new AbortController().signal,
    });
  } catch (err) {
    console.error(err);
    console.log(
        'The user aborted the authorization process by navigating "back"');
  }
};