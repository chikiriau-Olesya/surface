module ApplicationHelper
  def default_meta_tags
    {
      site: 'Surface.com',
      title: 'Surface',
      reverse: true,
      separator: '|',
      description: 'Медиа-сервис о русском серфинге',
      keywords: 'hse, art, design',
      canonical: request.original_url,
      noindex: !Rails.env.production?,
      icon: [
        { href: image_url('favicon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: 'Surface.com',
        title: 'Surface',
        description: 'Медиа-сервис о русском серфинге',
        type: 'website',
        url: request.original_url,
        image: image_url('login-page.png')
      }
    }
  end
end
